import React from 'react';

import { Container, StudentList, Student } from './styles';

interface StudentProps {
  id: string;
  name: string;
  email: string;
  birth_date?: string;
}

interface StudentsProps {
  students: StudentProps[];
}

const Students: React.FC<StudentsProps> = ({ students }: StudentsProps) => {
  return (
    <Container>
      <h1>Alunos</h1>
      <StudentList>
        {students.map(student => {
          return (
            <Student key={student.id}>
              <h3>{student.name}</h3>
              <p>
                Email:
                {student.email}
              </p>
              {student.birth_date && (
                <p>
                  Birthday:
                  {student.birth_date}
                </p>
              )}
            </Student>
          );
        })}
      </StudentList>
    </Container>
  );
};

export default Students;
