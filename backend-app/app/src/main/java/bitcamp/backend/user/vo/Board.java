package bitcamp.backend.user.vo;

import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import lombok.Data;

@Data
public class Board {

  @JsonFormat(shape = Shape.STRING, pattern = "yyyy-MM-dd")
  private Date createdDate;
  private int no;

  private String title;
  private String password;
  private String pain;
  private String another;

  // String name;
  // int age;
  // boolean gender;
  // String tel;
  // String addr1;
  // String addr2;
  public Board(String title, String password, String pain, String another) {
    super();
    this.title = title;
    this.password = password;
    this.pain = pain;
    this.another = another;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getPain() {
    return pain;
  }

  public void setPain(String pain) {
    this.pain = pain;
  }

  public String getAnother() {
    return another;
  }

  public void setAnother(String another) {
    this.another = another;
  }


}
