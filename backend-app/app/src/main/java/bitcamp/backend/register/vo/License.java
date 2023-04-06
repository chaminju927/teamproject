package bitcamp.backend.register.vo;

import lombok.Data;

@Data
public class License {
  private LicenseCategory category;
  private String licensePhoto;
  private String phoFilename;
  private String phoType;
  private int licenseOx;
}