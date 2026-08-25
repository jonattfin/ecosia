import {NextRequest, NextResponse} from "next/server";

import _, {head} from 'lodash';
import {loremIpsum} from "lorem-ipsum";
import {Project} from "@/app/api/interfaces";

export async function GET(request: NextRequest) {
  const data: Project[] = _.range(1, 10)
    .map((id) => ({
      id,
      name: `project_${id}`,
      description: loremIpsum(),
      title: `title_${id}`,
      treesPlanted: 100,
      hectaresRestored: 100,
      yearSince: 2018,
      imageUrl: 'url',
      scope: "",
      tags: [{
        id: 1,
        title: "Partners",
        subtitle: "partners"
      },
        {
          id: 2,
          title: "Challenges",
          subtitle: "Challenges"
        },
        {
          id: 3,
          title: "Wildlife protected",
          subtitle: "Wildlife protected"
        }]
    }));
  return NextResponse.json({
    ...head(data)
  });
}
