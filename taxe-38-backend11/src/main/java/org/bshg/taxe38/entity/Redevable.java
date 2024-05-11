package org.bshg.taxe38.entity;
import org.bshg.taxe38.zsecurity.entity.AppUser;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="redevable")
public class Redevable extends AppUser {
private String cin;
private String firstName;
private String lastName;
public Redevable() {
super();
}
public String getCin() {
return cin;
}
public void setCin(String value) {
this.cin = value;
}
public String getFirstName() {
return firstName;
}
public void setFirstName(String value) {
this.firstName = value;
}
public String getLastName() {
return lastName;
}
public void setLastName(String value) {
this.lastName = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof Redevable redevable) {
return redevable.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}