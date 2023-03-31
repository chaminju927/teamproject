package bitcamp.backend.register.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class Doctor extends Member{
  private String hospitalNo;
  private String career;
}
