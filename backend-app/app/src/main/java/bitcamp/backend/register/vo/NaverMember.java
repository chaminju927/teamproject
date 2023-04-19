package bitcamp.backend.register.vo;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class NaverMember {
  private int id;
  private String username;
  private String password;
  private String email;
  private String nickname;
  private String mobile;
  private LocalDateTime create_date;
  private LocalDateTime modify_date;
}