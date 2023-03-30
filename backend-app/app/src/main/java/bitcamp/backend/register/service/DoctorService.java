package bitcamp.backend.register.service;

import java.util.List;
import bitcamp.myapp.vo.Teacher;

public interface DoctorService {
  void add(Teacher teacher);
  List<Teacher> list();
  Teacher get(int no);
  Teacher get(String email, String password);
  void update(Teacher teacher);
  void delete(int no);
}





