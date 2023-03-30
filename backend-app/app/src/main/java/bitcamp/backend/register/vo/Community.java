package bitcamp.backend.register.vo;

import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import lombok.Data;

@Data
public class Community {

  @JsonFormat(shape = Shape.STRING, pattern = "yyyy-MM-dd")
  private Date createdDate;

  private int no;
  private String title;
  private String Content;
  private String Comment;
  private String comWriter;
}
