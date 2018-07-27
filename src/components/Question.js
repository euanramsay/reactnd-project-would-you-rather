import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import User from "./User";
import { answerQuestion } from '../actions/users'

class Question extends Component {
  handleAnswerQuestion = (option) => {
    const { dispatch, question, authedUser } = this.props;
    const answerData = {
      question,
      authedUser,
      option
    }
    dispatch(answerQuestion(answerData));
  };

  render() {
    const { question, user, authedUser } = this.props;

    if (question === null) {
      return <p>This Question doesn't exist</p>;
    }

    const { optionOne, optionTwo } = question;

    return (
      <Card className="question">
        <User id={user.id} />
        <CardHeader title="Would you rather?" />
        <CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() =>
                this.handleAnswerQuestion('optionOne')
              }
            >
              {optionOne.text}
            </Button>
            <Typography variant="headline">OR</Typography>
            <Button size="small" color="primary" onClick={() =>
                this.handleAnswerQuestion(question, authedUser, optionTwo.text)
              }>
              {optionTwo.text}
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  const user = users[question.author];

  return {
    question,
    user
  };
}

export default connect(mapStateToProps)(Question);
