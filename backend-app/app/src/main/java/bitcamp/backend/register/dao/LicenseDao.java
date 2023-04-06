package bitcamp.backend.register.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import bitcamp.backend.register.vo.License;

@Mapper
public interface LicenseDao {
  public void insert(License license);

  public List<License> findByBno(int licenseNo);

  public License findByNo(int dNo);

}
