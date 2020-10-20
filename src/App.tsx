import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import api from './services/api';

import Courses from './pages/Courses';
import Students from './pages/Students';
import Enrollments from './pages/Enrollments';

interface CourseProps {
  id: string;
  title: string;
  description?: string;
}

interface StudentProps {
  id: string;
  name: string;
  email: string;
  birth_date?: string;
}

interface EnrollmentProps {
  id: string;
  student_id: string;
  course_id: string;
}

const App: React.FC = () => {
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [students, setStudents] = useState<StudentProps[]>([]);
  const [enrollments, setEnrollments] = useState<EnrollmentProps[]>([]);

  useEffect(() => {
    async function loadCourses(): Promise<void> {
      api.get('courses').then(response => {
        const courseList = response.data;

        setCourses(courseList);
      });
    }

    async function loadStudents(): Promise<void> {
      api.get('students').then(response => {
        const studentList = response.data;

        setStudents(studentList);
      });
    }

    async function loadEnrollments(): Promise<void> {
      api.get('enrollments').then(response => {
        const enrollmentsList = response.data;

        setEnrollments(enrollmentsList);
      });
    }

    loadCourses();
    loadStudents();
    loadEnrollments();
  }, []);

  const handleAddCourse = async (
    course: Omit<CourseProps, 'id'>,
  ): Promise<void> => {
    const response: CourseProps = await api.post('courses', { course });
    setCourses(state => [...state, response]);
  };

  return (
    <>
      <Courses courses={courses} />
      <Students students={students} />
      <Enrollments enrollments={enrollments} />
      <GlobalStyle />
    </>
  );
};

export default App;
