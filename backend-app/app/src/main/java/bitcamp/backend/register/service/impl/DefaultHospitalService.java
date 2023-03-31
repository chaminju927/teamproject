package bitcamp.backend.register.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import bitcamp.backend.register.dao.HospitalDao;
import bitcamp.backend.register.service.HospitalService;
import bitcamp.backend.register.vo.Hospital;

@Service
public class DefaultHospitalService implements HospitalService{

  @Autowired private HospitalDao hospitalDao;


  @Transactional
  @Override
  public void add(Hospital hospital) {
    hospitalDao.insert(hospital);
  }

  @Override
  public List<Hospital> list() {
    return hospitalDao.findAll();
  }

  @Override
  public Hospital get(int no) {
    return hospitalDao.findByNo(no);
  }

  @Override
  public Hospital get(String id, String password) {
    Map<String,Object> paramMap = new HashMap<>();
    paramMap.put("id", id);
    paramMap.put("password", password);

    return hospitalDao.findByIdAndPassword(paramMap);
  }

  @Transactional
  @Override
  public void update(Hospital hospital) {
    if (hospitalDao.update(hospital) == 0) {
    } else {
      throw new RuntimeException("병원이 존재하지 않습니다.");
    }
  }

  @Transactional
  @Override
  public void delete(int no) {
    if (hospitalDao.delete(no) == 0) {
    } else {
      throw new RuntimeException("병원이 존재하지 않습니다.");
    }
  }
}
