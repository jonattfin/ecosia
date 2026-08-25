import {http, HttpResponse} from 'msw';
import _ from 'lodash';

import {db} from './db';
import {httpBaseUrl} from "@/app/api";

export const handlers = [
  http.get(`${httpBaseUrl}/projects`, async () => {
    const json = {
      projects: db.project.getAll()
    };

    return HttpResponse.json({
      body: json,
      status: 200,
    })
  }),

  http.get(`${httpBaseUrl}/projects/:projectId`, async ({params}) => {
    const {projectId = 0} = params;
    const projects = db.project.getAll();

    const json = _.find(projects, p => p.id === parseInt(projectId.toString()));

    return HttpResponse.json({
      body: json,
      status: 200,
    })
  }),

  http.get(`${httpBaseUrl}/tags`, async () => {
    const json = db.tag.getAll();

     return HttpResponse.json({
      body: json,
      status: 200,
    })
  }),

  http.get(`${httpBaseUrl}/reports`, async () => {

    const json = {
      reports: db.report.getAll()
    };

     return HttpResponse.json({
      body: json,
      status: 200,
    })
  }),

  http.get(`${httpBaseUrl}/reports/last`, async () => {
    const reports = db.report.getAll();

     return HttpResponse.json({
      body: reports,
      status: 200,
    })
  }),

  http.get(`${httpBaseUrl}/search`, async () => {
    const text = "";
    const page = 1;
    const size = 10;

    const json = {
      page,
      size,
      count: 20,
      searches: db.query.findMany({}).map(item => ({...item, name: `${item.name} ${text}`}))
    };

    return HttpResponse.json({
      body: json,
      status: 200,
    })
  }),
]
