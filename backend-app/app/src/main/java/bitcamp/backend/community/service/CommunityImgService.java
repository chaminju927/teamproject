package bitcamp.backend.community.service;

import java.util.List;
import bitcamp.backend.community.vo.CommunityImg;

public interface CommunityImgService {
  public void add(CommunityImg communityImg);

  List<CommunityImg> list(int C_no);

  CommunityImg get(int no);

  void update(CommunityImg comImg);

  void delete(int no);
}
