package bitcamp.backend.community;

import java.sql.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.backend.community.service.CommunityService;
import bitcamp.backend.community.vo.Community;

@CrossOrigin("*")
@EnableTransactionManagement
@SpringBootApplication
@ComponentScan("bitcamp.backend.community")
@RestController
public class App {

  @Autowired CommunityService communityService;
  @Autowired Community community;

  public static void main(String args[]) {
    SpringApplication.run(App.class, args);
  }

  @GetMapping("/community-test")
  public String hello() {
    System.out.println(10);

    community.setNo(2);
    community.setTitle("제목");
    community.setContent("내용");
    community.setCreatedDate(new Date(3));
    community.setCategory(0);
    community.setComWriter("me");

    communityService.add(community);

    return ("Hello World!!");
  }

  //  @GetMapping("/patient-test")
  //  public String hello2() {
  //    System.out.println(10);
  //    Doctor doctor = new Doctor();

  //    pati.setId("2");
  //    doctor.setPassword("1");
  //    doctor.setBirth(new Date(1));
  //    doctor.setName("1");
  //    doctor.setEmail("1");
  //    doctor.setAddr("1");
  //    doctor.setTel("1");
  //    doctor.setGender("1");

  //    doctorService.add(doctor);
  //
  //    return ("Hello World!!");
  //  }

}
