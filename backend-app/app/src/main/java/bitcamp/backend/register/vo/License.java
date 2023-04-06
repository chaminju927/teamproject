package bitcamp.backend.register.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class License extends Doctor {
  private int licenseNo;
  private String licenseName;
  private String licensePhoto;
  private String phoFilename;
  private String phoType;
  private int licenseOx;
}
