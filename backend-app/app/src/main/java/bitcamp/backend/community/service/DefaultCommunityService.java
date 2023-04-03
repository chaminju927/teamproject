package bitcamp.backend.community.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import bitcamp.backend.community.dao.CommunityDao;
import bitcamp.backend.community.vo.Community;

@Service
public class DefaultCommunityService implements CommunityService{

  @Autowired
  private CommunityDao communityDao;

  @Transactional
  @Override
  public void add(Community community) {
    communityDao.insert(community);
  }

  @Override
  public List<Community> list() {
    return communityDao.findAll();
  }

  @Override
  public Community get(int no) {
    return communityDao.findByNo(no);
  }

  @Override
  public void update(Community c) {
    communityDao.update(c);
  }
  @Override
  public void delete(int no) {
    communityDao.delete(no);
  }
}
