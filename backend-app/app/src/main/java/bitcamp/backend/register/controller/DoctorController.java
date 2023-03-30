package bitcamp.backend.register.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.backend.register.service.DoctorService;
import bitcamp.backend.register.vo.Doctor;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;

@RestController
@RequestMapping("/doctors")
public class DoctorController {

  Logger log = LogManager.getLogger(getClass());

  {
    log.trace("DoctorController 생성됨!");
  }

  @Autowired private DoctorService doctorService;

  @PostMapping
  public Object insert(@RequestBody Doctor doctor) {
    doctorService.add(doctor);
    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

  @GetMapping
  public Object list() {
    return new RestResult()
        .setStatus(RestStatus.SUCCESS)
        .setData(doctorService.list());
  }

  @GetMapping("{no}")
  public Object view(@PathVariable int no) {
    return new RestResult()
        .setStatus(RestStatus.SUCCESS)
        .setData(doctorService.get(no));
  }

  @PutMapping("{no}")
  public Object update(
      @PathVariable int no,
      @RequestBody Doctor doctor) {

    log.debug(doctor);

    doctor.setNo(no);
    doctorService.update(doctor);

    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

  @DeleteMapping("{no}")
  public Object delete(@PathVariable int no) {
    doctorService.delete(no);
    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

}
