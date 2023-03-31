package bitcamp.backend.register.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.backend.register.service.DoctorService;
import bitcamp.backend.register.service.PatientService;
import bitcamp.backend.register.vo.Member;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/auth")
public class AuthController {

  Logger log = LogManager.getLogger(getClass());

  {
    log.trace("AuthController 생성됨!");
  }

  @Autowired private PatientService patientService;
  @Autowired private DoctorService doctorService;

  @PostMapping("login")
  public Object login(
      String usertype,
      String id,
      String password,
      HttpSession session) {

    Member member = null;
    switch (usertype) {
      case "patient":
        member = patientService.get(id, password);
        break;
      case "doctor":
        member = doctorService.get(id, password);
        break;
    }

    if (member != null) {
      session.setAttribute("loginUser", member);
      return new RestResult()
          .setStatus(RestStatus.SUCCESS);
    } else {
      return new RestResult()
          .setStatus(RestStatus.FAILURE);
    }
  }

  @GetMapping("logout")
  public Object logout(HttpSession session) {
    session.invalidate();
    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

  @RequestMapping("user")
  public Object user(HttpSession session) {
    Member loginUser = (Member) session.getAttribute("loginUser");
    if (loginUser != null) {
      return new RestResult()
          .setStatus(RestStatus.SUCCESS)
          .setData(loginUser);
    } else {
      return new RestResult()
          .setStatus(RestStatus.FAILURE);
    }
  }

}









