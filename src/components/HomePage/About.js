import React from "react";

//styled components
import {
  AboutSection,
  Wrapper,
  Content,
  Title,
  Code,
  Line,
  CodeLine,
} from "../../styles/HomePage/About";

const About = ({ onCursor }) => {
  return (
    <AboutSection id="about">
      <Wrapper>
        <Content>
          <Title>about</Title>
          <Code>
            <Line>
              <span className="number">01</span>
              <CodeLine>
                <span className="title">class</span>
                <span className="subtitle">About</span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">02</span>
              <CodeLine two>
                <span className="title">
                  My vast variety of skills is continuously growing
                </span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">03</span>
              <CodeLine three>
                <span className="subtitle">constructor</span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">04</span>
              <CodeLine four>
                {"..."}
                <span className="title">
                  this.<span className="Name">name</span>{" "}
                  <span className="equal">=</span>{" "}
                  <span className="subName">'Abhishek Kumar'</span>
                </span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">05</span>
              <CodeLine five>
                {"..."}
                <span className="title">
                  this.<span className="Name">email</span>{" "}
                  <span className="equal">=</span>{" "}
                  <span className="subName">'abhishekucskumar@gmail.com'</span>
                </span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">06</span>
              <CodeLine six>
                <span className="title"></span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">07</span>
              <CodeLine seven>
                <span className="subtitle">education</span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">08</span>
              <CodeLine eight>
                {"..."}
                <span className="subtitle">return</span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">09</span>
              <CodeLine nine>
                {"...."}
                <span className="title"></span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">10</span>
              <CodeLine ten>
                {"........."}
                <span className="subtitle">
                  <span className="college">college</span> : "NIT Agartala",
                </span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">11</span>
              <CodeLine eleven>
                {"........."}
                <span className="subtitle">
                  <span className="mainly">mainly</span> : "Internet"
                </span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">12</span>
              <CodeLine twelve>
                {"...."}
                <span className="title"></span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">13</span>
              <CodeLine thirteen>
                <span className="title"></span>
              </CodeLine>
            </Line>

            <Line>
              <span className="number">14</span>
              <CodeLine seven>
                <span className="subtitle">skills</span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">15</span>
              <CodeLine fifteen>
                {"..."}
                <span className="subtitle">return</span>
              </CodeLine>
            </Line>

            <Line>
              <span className="number">16</span>
              <CodeLine ten>
                {"........."}
                <span className="subtitle">
                  "Photoshop", "Illustrator", "HTML", "CSS", "javascript",
                  "Scss", "Node.js", "Express.js", "c++", "c", "React.js",
                  "MongoDB", "Photography", "webpack", "yarn/npm", "firebase",
                  "websocket", "UI/UX"
                </span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">17</span>
              <CodeLine seventeen>
                {"...."}
                <span className="title"></span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">18</span>
              <CodeLine thirteen>
                <span className="title"></span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">19</span>
              <CodeLine seven>
                <span className="subtitle">experience</span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">20</span>
              <CodeLine eight>
                {"..."}
                <span className="subtitle">return</span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">21</span>
              <CodeLine nine>
                {"...."}
                <span className="title"></span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">22</span>
              <CodeLine ten>
                {"........."}
                <span className="subtitle">
                  <span className="college">E-cell NIT Agartala</span> : "Media
                  Head/ PR Head(Now)",
                </span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">23</span>
              <CodeLine ten>
                {"........."}
                <span className="subtitle">
                  <span className="college">findhope</span> : "CTO/Designer",
                </span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">24</span>
              <CodeLine ten>
                {"........."}
                <span className="subtitle">
                  <span className="college">codechef</span> : "3star",
                </span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">25</span>
              <CodeLine twelve>
                {"...."}
                <span className="title"></span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">26</span>
              <CodeLine twentysix>
                <span className="title"></span>
              </CodeLine>
            </Line>
            <Line>
              <span className="number">27</span>
              <CodeLine point>
                <span id="cursor"></span>
              </CodeLine>
            </Line>
          </Code>
          <Title last>about</Title>
        </Content>
      </Wrapper>
    </AboutSection>
  );
};

export default About;
