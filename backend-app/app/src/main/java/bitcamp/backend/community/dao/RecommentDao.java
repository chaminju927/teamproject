package bitcamp.backend.community.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import bitcamp.backend.community.vo.Recomment;

@Mapper
public interface RecommentDao {

  void insert(Recomment recomment);
  List<Recomment> findAll();
  int delete(int no);

}
