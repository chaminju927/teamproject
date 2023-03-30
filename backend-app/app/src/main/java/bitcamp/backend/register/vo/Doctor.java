package bitcamp.backend.register.vo;

import lombok.Data;

@Data
public class Doctor extends Member{
  private int degree;
  private String school;
  private String major;
  private int wage;
}
