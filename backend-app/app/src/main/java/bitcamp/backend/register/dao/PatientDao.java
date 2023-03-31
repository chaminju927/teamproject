package bitcamp.backend.register.dao;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import bitcamp.backend.register.vo.Patient;

@Mapper
public interface PatientDao {
  void insert(Patient p);
  List<Patient> findAll();
  Patient findByNo(int no);
  Patient findByEmailAndPassword(Map<String,Object> params);
  int update(Patient p);
  int delete(int no);
}







