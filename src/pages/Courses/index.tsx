import React from 'react';

import { Container, CourseList, Course } from './styles';

interface CourseProps {
  id: string;
  title: string;
  description?: string;
}

interface CoursesProps {
  courses: CourseProps[];
}

const Courses: React.FC<CoursesProps> = ({ courses }: CoursesProps) => {
  return (
    <Container>
      <h1>Cursos</h1>
      <CourseList>
        {courses.map(course => {
          return (
            <Course key={course.id}>
              <h3>{course.title}</h3>
              {course.description && <p>{course.description}</p>}
            </Course>
          );
        })}
      </CourseList>
      <form>
        <label htmlFor="title">
          Título
          <input type="text" name="title" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" />
        </label>
        <label htmlFor="submit">
          Enviar
          <input type="submit" />
        </label>
      </form>
    </Container>
  );
};

export default Courses;
