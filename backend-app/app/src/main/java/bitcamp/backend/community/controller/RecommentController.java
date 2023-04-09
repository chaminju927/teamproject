package bitcamp.backend.community.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.backend.community.service.RecommentService;

@RestController
@RequestMapping("/recomment")
@CrossOrigin("*")
@SpringBootApplication
public class RecommentController {

  @Autowired
  private RecommentService recommentService;


}

