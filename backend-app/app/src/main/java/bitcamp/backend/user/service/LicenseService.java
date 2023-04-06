package bitcamp.backend.user.service;

import java.util.List;
import bitcamp.backend.register.vo.License;

public interface LicenseService {
  void add(License license);

  List<License> list(int licenseNo);

  License get(int dNo);

  void update(License license);

  void delete(int dNo);
}
