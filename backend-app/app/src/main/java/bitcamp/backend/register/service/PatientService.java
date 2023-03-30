package bitcamp.backend.register.service;

import java.util.List;
import bitcamp.myapp.vo.Student;

public interface PatientService {
  void add(Student student);
  List<Student> list(String keyword);
  Student get(int no);
  Student get(String email, String password);
  void update(Student student);
  void delete(int no);
}





