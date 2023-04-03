package bitcamp.backend.community.vo;

import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import lombok.Data;

@Data
public class Community {

  @JsonFormat(shape = Shape.STRING, pattern = "yyyy-MM-dd")
  private Date createdDate;

  private int no;
  private int category;
  private String title;
  private String content;
  private int catetory;
  private String comWriter;
  private int viewCnt;
  private int like;
  private int filter;

  public Community(String title, String content ) {

  }
}