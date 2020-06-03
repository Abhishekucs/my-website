import React from "react";
import { ContentSubTwo } from "../../styles/HomePage/bodyStyles";

class Typer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 200,
    };
    this.handleType = this.handleType.bind(this);
  }
  componentDidMount() {
    window.addEventListener("load", this.handleType());
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleType());
  }

  handleType = () => {
    const { dataText } = this.props;
    const { text, isDeleting, loopNum, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 40 : 200,
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      });
    }

    setTimeout(this.handleType, typingSpeed);
  };
  // Typer.defaultProps = {
  //   dataText: ["Developer", "Designer", "Coder", "blah blah blah"],
  // };

  render() {
    return (
      <div>
        <ContentSubTwo>
          {this.state.text.includes("b") ? "" : "I am a "}
          <span>{this.state.text}</span>
          <span id="cursor"></span>
        </ContentSubTwo>
      </div>
    );
  }
}

export default Typer;
