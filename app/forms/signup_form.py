from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("Email address is already in use.")


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError("Username is already in use.")


class SignUpForm(FlaskForm):
    username = StringField("username", validators=[DataRequired(), username_exists])
    email = StringField("email", validators=[DataRequired(), user_exists])
    password = StringField("password", validators=[DataRequired()])
    confirmPassword = StringField("confirm password", validators=[DataRequired()])
    aboutMe = TextAreaField("about me", validators=[DataRequired()])
    firstName = StringField("first name", validators=[DataRequired()])
    lastName = StringField("last name", validators=[DataRequired()])
