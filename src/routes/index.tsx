import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Courses from '../pages/Courses';
import Students from '../pages/Students';
import Enrollments from '../pages/Enrollments';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Enrollments} />
    <Route path="/alunos" exact component={Students} />
    <Route path="/cursos" component={Courses} />
  </Switch>
);

export default Routes;
