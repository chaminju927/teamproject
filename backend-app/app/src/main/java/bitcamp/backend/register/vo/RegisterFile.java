package bitcamp.backend.register.vo;

import lombok.Data;

@Data
public class RegisterFile {
  private int no;
  private String filepath;
  private String originalFilename;
  private String mimeType;
  private int boardNo;
}
