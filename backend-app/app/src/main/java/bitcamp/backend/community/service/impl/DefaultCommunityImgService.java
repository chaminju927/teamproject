package bitcamp.backend.community.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import bitcamp.backend.community.dao.CommunityImgDao;
import bitcamp.backend.community.service.CommunityImgService;
import bitcamp.backend.community.vo.CommunityImg;

@Service
public class DefaultCommunityImgService implements CommunityImgService{

  @Autowired CommunityImgDao communityImgDao;

  @Override
  public void add(CommunityImg communityImg) {
    communityImgDao.insert(communityImg);

  }

  @Override
  public List<CommunityImg> list(int B_no) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public CommunityImg get(int no) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public void update(CommunityImg comImg) {
    // TODO Auto-generated method stub

  }

  @Override
  public void delete(int no) {
    // TODO Auto-generated method stub

  }


}
