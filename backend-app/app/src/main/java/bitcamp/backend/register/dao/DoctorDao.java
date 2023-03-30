package bitcamp.backend.register.dao;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import bitcamp.myapp.vo.Teacher;

@Mapper
public interface DoctorDao {
  void insert(Teacher t);
  List<Teacher> findAll();
  Teacher findByNo(int no);
  Teacher findByEmailAndPassword(Map<String, Object> params);
  int update(Teacher t);
  int delete(int no);
}







