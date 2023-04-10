package bitcamp.backend.register.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import bitcamp.backend.register.dao.HosPhotoDao;
import bitcamp.backend.register.service.HosPhotoService;
import bitcamp.backend.register.vo.HosPhoto;

@Service
public class DefaultHosPhotoService implements HosPhotoService  {

  @Autowired  HosPhotoDao hosPhotoDao;

  @Transactional
  @Override
  public void add(HosPhoto hosPhoto) {
    hosPhotoDao.insert(hosPhoto);
  }

  @Override
  public List<HosPhoto> get(int no) {
    return hosPhotoDao.findByPhotoNo(no);
  }

  @Override
  public void update(HosPhoto hosPhoto) {
    // TODO Auto-generated method stub

  }

  @Transactional
  @Override
  public void delete(int no) {
    if (hosPhotoDao.delete(no) == 0) {
    } else {
      throw new RuntimeException("사진이 존재하지 않습니다.");
    }
  }
}
