import {NextRequest, NextResponse} from "next/server";

import _, {head} from 'lodash';
import {loremIpsum} from "lorem-ipsum";

export async function GET(request: NextRequest) {
  const data = _.range(1, 10)
    .map((id) => ({
      id,
      name: `project_${id}`,
      description: loremIpsum(),
      title: `title_${id}`,
      treesPlanted: 100,
      hectaresRestored: 100,
      yearSince: 2018,
      imageUrl: 'url',
      tags: []
    }));
  return NextResponse.json({
    projects: head(data)
  });
}
