package bitcamp.backend.user.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import bitcamp.backend.register.dao.LicenseDao;
import bitcamp.backend.register.vo.License;
import bitcamp.backend.user.service.LicenseService;

@Service
public class DefaultLicenseService implements LicenseService{

  @Autowired private LicenseDao licenseDao;

  @Override
  public void add(License license) {
    licenseDao.insert(license);
  }

  @Override
  public List<License> list(int B_no) {
    return licenseDao.findByBno(B_no);
  }

  @Override
  public License get(int no) {
    return licenseDao.findByNo(no);
  }

  @Override
  public void update(License license) {

  }

  @Override
  public void delete(int no) {

  }

}
