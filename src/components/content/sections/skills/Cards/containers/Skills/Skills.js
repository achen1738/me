import React, { Component } from "react";
import colors from "../../../../colors.module.css";
import { SkillCard, styles } from "../../index";

class Skills extends Component {
  state = {
    backgroundColors: [
      colors.forest,
      colors.violet,
      colors.peach,
      colors.friday,
      colors.bloo,
      colors.sundown,
      colors.ocean,
      colors.animation,
      colors.candy,
      colors.evergarden,
      colors.reddy,
      colors.mochi
    ],
    solidBackground: [
      colors.forestBackground,
      colors.violetBackground,
      colors.peachBackground,
      colors.fridayBackground,
      colors.blooBackground,
      colors.sundownBackground,
      colors.oceanBackground,
      colors.animationBackground,
      colors.candyBackground,
      colors.evergardenBackground,
      colors.reddyBackground,
      colors.mochiBackground
    ],
    colors: [
      colors.forestText,
      colors.violetText,
      colors.peachText,
      colors.fridayText,
      colors.blooText,
      colors.sundownText,
      colors.oceanText,
      colors.animationText,
      colors.candyText,
      colors.evergardenText,
      colors.reddyText,
      colors.mochiText
    ],
    opened: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    info: {
      430: "Intro to Database Systems",
      427: "Introduction to Computer Security",
      425: "Computer Systems Architecture",
      421: "Operating Systems / Concurrent Programming",
      412: "Compiler Construction - UG COMP",
      410: "Software Engineering Methodology",
      382: "Reasoning about Algorithms",
      330: "Tools and Models - Data Science",
      322: "Fundamentals of Parallel Programming",
      321: "Introduction to Computer Systems",
      310: "Advanced Object Oriented Programming",
      215: "Introduction to Program Design",
      182: "Discrete Math and Algorithmic Thinking",
      140: "Introduction to Python",
      L: "League of Legends Website",
      SW: "School Sustainability Website",
      AC: "This website",
      IBM: "IBM"
    },
    icons: {
      IBM: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16 10a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6zm-4.25 7.87h8.5v4.25h-8.5zM16 28.25A4.27 4.27 0 0 1 11.75 24v-.13h8.5V24A4.27 4.27 0 0 1 16 28.25zm4.25-12.13h-8.5V16a4.25 4.25 0 0 1 8.5 0zm10.41 3.09L24 13v9.1a4 4 0 0 0 8 0 3.83 3.83 0 0 0-1.34-2.89zM28 24.35a2.25 2.25 0 0 1-2.25-2.25V17l3.72 3.47A2.05 2.05 0 0 1 30.2 22a2.25 2.25 0 0 1-2.2 2.35zM0 22.1a4 4 0 0 0 8 0V13l-6.66 6.21A3.88 3.88 0 0 0 0 22.1zm2.48-1.56L6.25 17v5.1a2.25 2.25 0 0 1-4.5 0 2.05 2.05 0 0 1 .73-1.56zM15 5.5A3.5 3.5 0 1 0 11.5 9 3.5 3.5 0 0 0 15 5.5zm-5.25 0a1.75 1.75 0 1 1 1.75 1.75A1.77 1.77 0 0 1 9.75 5.5zM20.5 2A3.5 3.5 0 1 0 24 5.5 3.5 3.5 0 0 0 20.5 2zm0 5.25a1.75 1.75 0 1 1 1.75-1.75 1.77 1.77 0 0 1-1.75 1.75z" />
        </svg>
      )
    },
    content: [
      {
        down: true,
        text: "ReactJS",
        fluency: "(Fluent)",
        classes: { ids: [410], opened: [true] },
        projects: { ids: ["L", "SW", "AC"], opened: [true, false, false] },
        work: { ids: ["IBM"], opened: [true] },
        lines: "10,000+"
      },
      {
        down: true,
        text: "Java",
        fluency: "(Fluent)",
        classes: { ids: [215, 310, 412], opened: [true, false, false] },
        projects: { ids: [], opened: [] },
        work: { ids: ["IBM"], opened: [true] },
        lines: "5,000+"
      },
      {
        down: true,
        text: "C",
        fluency: "(Fluent)",
        classes: { ids: [321, 421], opened: [true, false] },
        projects: { ids: [], opened: [] },
        work: { ids: [], opened: [] },
        lines: "10,000+"
      },
      {
        down: true,
        text: "T-SQL",
        fluency: "(Fluent)",
        classes: { ids: [330, 430], opened: [true, false] },
        projects: { ids: ["L"], opened: [true] },
        work: { ids: [], opened: [] },
        lines: "~1,000"
      },
      {
        down: true,
        text: "Javascript",
        fluency: "(Fluent)",
        classes: { ids: [410], opened: [true] },
        projects: { ids: ["L", "SW", "AC"], opened: [true, false, false] },
        work: { ids: [], opened: [] },
        lines: "~5,000"
      },
      {
        down: true,
        text: "HTML5",
        fluency: "(Fluent)",
        classes: { ids: [410], opened: [true] },
        projects: { ids: ["L", "SW", "AC"], opened: [true, false, false] },
        work: { ids: [], opened: [] },
        lines: "10,000+"
      },
      {
        down: true,
        text: "CSS3",
        fluency: "(Fluent)",
        classes: { ids: [410], opened: [true] },
        projects: { ids: ["L", "SW", "AC"], opened: [true, false, false] },
        work: { ids: [], opened: [] },
        lines: "10,000+"
      },
      {
        down: true,
        text: "PostgreSQL",
        fluency: "(Fluent)",
        classes: { ids: [430], opened: [true] },
        projects: { ids: [], opened: [] },
        work: { ids: [], opened: [] },
        lines: "~1,000"
      },
      {
        down: true,
        text: "Typescript",
        fluency: "(Functional)",
        classes: { ids: [410], opened: [true] },
        projects: { ids: [], opened: [] },
        work: { ids: [], opened: [] },
        lines: "~2,000"
      },
      {
        down: true,
        text: "NoSQL",
        fluency: "(Functional)",
        classes: { ids: [430], opened: [true] },
        projects: { ids: ["L", "SW"], opened: [true, false] },
        work: { ids: [], opened: [] },
        lines: "~500"
      },
      {
        down: true,
        text: "Python",
        fluency: "(Functional)",
        classes: { ids: [140, 182], opened: [true, false] },
        projects: { ids: [], opened: [] },
        work: { ids: [], opened: [] },
        lines: "~1000"
      },
      {
        down: true,
        text: "NodeJS",
        fluency: "(Functional)",
        classes: { ids: [], opened: [] },
        projects: { ids: ["L", "SW"], opened: [true, false] },
        work: { ids: [], opened: [] },
        lines: "~500"
      }
    ]
  };

  setContent = (content, index) => {
    let contentState = this.state.content;
    contentState[index] = content;
    this.setState({ content: contentState });
  };

  setCardOpened = index => {
    var opened = this.state.opened;
    opened[index] = !opened[index];
    this.setState({ opened: opened });
  };

  setExperienceOpened = (e, groupString) => {
    const contentIndex = parseInt(
      e.currentTarget.getAttribute("data-content-index")
    );
    const openedIndex = parseInt(
      e.currentTarget.getAttribute("data-opened-index")
    );
    var content = this.state.content;
    var newOpened = content[contentIndex][groupString].opened.map(
      (bool, index) => {
        return index === openedIndex;
      }
    );
    content[contentIndex][groupString].opened = newOpened;
    this.setState({ content: content });
  };

  renderExperience = (index, groupString) => {
    const group = this.state.content[index][groupString];
    const openedIndex = group.opened.findIndex(bool => bool);
    const openedID = group.ids[openedIndex];
    const info = " - " + this.state.info[openedID];
    const textStyle = [styles.experienceText, this.state.colors[index]];
    if (group.ids.length > 0) {
      return (
        <>
          <div data-info={info} className={textStyle.join(" ")}>
            {groupString}
          </div>
          <div className={styles.classes}>
            {this.renderGroup(group, index, groupString)}
          </div>
        </>
      );
    }
  };

  renderGroup = (group, index, groupString) => {
    const openedGroup = group.opened;
    return group.ids.map((id, idx) => {
      let expStyle = [styles.class, this.state.colors[index]];
      if (openedGroup[idx])
        expStyle.push(this.state.solidBackground[index], styles.whiteText);
      //   else expStyle.push(this.state.colors[index]);
      return (
        <div
          data-content-index={index}
          data-opened-index={idx}
          onClick={e => this.setExperienceOpened(e, groupString)}
          key={idx}
          className={expStyle.join(" ")}
        >
          <span className={[this.state.colors[index], styles.center].join(" ")}>
            {groupString === "work" ? this.state.icons[id] : id}
          </span>
        </div>
      );
    });
  };

  renderLines = index => {
    return (
      <div className={[styles.lines, this.state.colors[index]].join(" ")}>
        Lines of Code: {this.state.content[index].lines}
      </div>
    );
  };

  renderCards = () => {
    return this.state.content.map((exp, index) => {
      let contentStyle = [styles.cardContent];
      if (this.state.opened[index]) contentStyle.push(styles.moved);

      let headerStyle = [styles.cardHeader];
      if (this.state.opened[index]) headerStyle.push(styles.expandedHeader);

      let bodyStyle = [styles.cardBody];
      if (this.state.opened[index]) bodyStyle.push(styles.shiftBody);

      const backgroundColor = this.state.backgroundColors[index];
      const color = this.state.colors[index];
      const content = this.state.content[index];
      const opened = this.state.opened[index];
      const solidBackground = this.state.solidBackground[index];
      return (
        <SkillCard
          key={index}
          index={index}
          backgroundColor={backgroundColor}
          color={color}
          content={content}
          opened={opened}
          setCardOpened={this.setCardOpened}
          contentStyle={contentStyle}
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          exp={exp}
          solidBackground={solidBackground}
          info={this.state.info}
          icons={this.state.icons}
          setExperienceOpened={this.setExperienceOpened}
          setContent={this.setContent}
        />
      );
    });
  };

  render() {
    return <div className={styles.container}>{this.renderCards()}</div>;
  }
}

export default Skills;