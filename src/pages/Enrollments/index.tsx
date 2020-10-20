import React from 'react';

import { Container, EnrollmentList, Enrollment } from './styles';

interface EnrollmentProps {
  id: string;
  student_id: string;
  course_id: string;
}

interface EnrollmentsProps {
  enrollments: EnrollmentProps[];
}

const Enrollments: React.FC<EnrollmentsProps> = ({
  enrollments,
}: EnrollmentsProps) => {
  return (
    <Container>
      <h1>Matrículas</h1>
      <EnrollmentList>
        {enrollments.map(enrollment => {
          return (
            <Enrollment key={enrollment.id}>
              <p>
                Aluno:
                {enrollment.student_id}
              </p>
              <p>
                Curso:
                {enrollment.course_id}
              </p>
            </Enrollment>
          );
        })}
      </EnrollmentList>
    </Container>
  );
};

export default Enrollments;
