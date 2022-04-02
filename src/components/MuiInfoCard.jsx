import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ProjectsCard from "./ProjectsCard";

export default function MuiInfoCard() {
  return (
    <Card>
      <CardContent>
        <h2>
          Hi!{<br />} My Name is Lynn and I study applied computer science at
          HTW Berlin.
        </h2>
        <ProjectsCard />
      </CardContent>
    </Card>
  );
}
