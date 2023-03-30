package bitcamp.backend.register.service;

import java.util.List;
import bitcamp.backend.register.vo.Patient;

public interface PatientService {
  void add(Patient student);
  List<Patient> list(String keyword);
  Patient get(int no);
  Patient get(String email, String password);
  void update(Patient student);
  void delete(int no);
}





