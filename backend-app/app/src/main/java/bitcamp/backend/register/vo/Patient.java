package bitcamp.backend.register.vo;

import lombok.Data;

@Data
public class Patient extends Member{
  private String postNo;
  private String basicAddress;
  private String detailAddress;
  private boolean working;
  private char gender;
  private byte level;
}
