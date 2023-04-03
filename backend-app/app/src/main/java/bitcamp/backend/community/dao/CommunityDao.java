package bitcamp.backend.community.dao;

import java.util.List;
import bitcamp.backend.community.vo.Community;

public interface CommunityDao {

  void insert(Community community);
  List<Community> findAll();
  Community findByNo(int no);
  void increaseViewCount(int no);
  int update(Community c);
  int delete(int no);


}
