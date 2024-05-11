package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.Locale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface LocaleDao extends JpaRepository<Locale, Long> {
int deleteByIdIn(List<Long> ids);
int deleteByRueId(Long id);
List<Locale> findByRueId(Long id);
int deleteByRedevableId(Long id);
List<Locale> findByRedevableId(Long id);
List<Locale> findByRedevableUsername(String username);
int deleteByCategorieLocaleId(Long id);
List<Locale> findByCategorieLocaleId(Long id);
}