import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e3320">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2019"
          iconStyle={{ background: "#3e4244", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Department of Biochemical Science & Technology, National Taiwan
            University (Bachelor Degree)
          </h3>
          <p>• Start learning programing languages: Python, C++, R </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2021"
          iconStyle={{ background: "#3e4244", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Medicine Institute of Molecular Medicine,National Taiwan University
            (Master Degree)
          </h3>
          <p>• Start learning Javascript, ReactJS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-Present"
          iconStyle={{ background: "#4b3242", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Victor Education (Teacher Assistant)
          </h3>
          <p></p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
