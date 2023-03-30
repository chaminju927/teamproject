package bitcamp.backend.register.dao;

import java.util.List;
import java.util.Map;
import bitcamp.backend.register.vo.Doctor;

//@Mapper
public interface DoctorDao {
  void insert(Doctor d);
  List<Doctor> findAll();
  Doctor findByNo(int no);
  Doctor findByIdAndPassword(Map<String, Object> params);
  int update(Doctor d);
  int delete(int no);
}







