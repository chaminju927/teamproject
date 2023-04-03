package bitcamp.backend.community.vo;

import java.sql.Date;
import java.util.List;
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
  private List<Object> Comment;
  private String comWriter;
  private int viewCnt;
}
