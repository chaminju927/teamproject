package bitcamp.backend.register.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import bitcamp.backend.register.dao.MemberDao;
import bitcamp.backend.register.dao.PatientDao;
import bitcamp.backend.register.service.PatientService;
import bitcamp.backend.register.vo.Patient;


@Service
public class DefaultPatientService implements PatientService {

  @Autowired private MemberDao memberDao;
  @Autowired private PatientDao patientDao;

  @Transactional
  @Override
  public void add(Patient patient) {
    memberDao.insert(patient);
    patientDao.insert(patient);
  }

  @Override
  public List<Patient> list() {
    return patientDao.findAll();
  }

  @Override
  public Patient get(int no) {
    return patientDao.findByNo(no);
  }

  @Override
  public Patient get(String email, String password) {
    Map<String,Object> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);

    return patientDao.findByEmailAndPassword(paramMap);
  }

  @Transactional
  @Override
  public void update(Patient patient) {
    if (memberDao.update(patient) == 1 &&
        patientDao.update(patient) == 1) {
    } else {
      throw new RuntimeException("강사가 존재하지 않습니다.");
    }
  }

  @Transactional
  @Override
  public void delete(int no) {
    if (patientDao.delete(no) == 1 &&
        memberDao.delete(no) == 1) {
    } else {
      throw new RuntimeException("강사가 존재하지 않습니다.");
    }
  }

  @Override
  public List<Patient> list(String keyword) {
    // TODO Auto-generated method stub
    return null;
  }
}










