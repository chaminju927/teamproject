package bitcamp.backend.register.dao;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import bitcamp.backend.register.vo.Hospital;


@Mapper
public interface HospitalDao {
  void insert(Hospital h);
  List<Hospital> findAll();
  Hospital findByTel(String tel);
  Hospital findByNo(int no);
  Hospital findByHosAndPassword(Map<String, Object> params);
  int update(Hospital h);
  int delete(int no);
}
