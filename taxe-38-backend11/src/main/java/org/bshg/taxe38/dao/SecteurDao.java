package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.Secteur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface SecteurDao extends JpaRepository<Secteur, Long> {
int deleteByIdIn(List<Long> ids);
int deleteByVilleId(Long id);
List<Secteur> findByVilleId(Long id);
@Query("SELECT NEW Secteur(item.id,item.libelle) FROM Secteur item")
List<Secteur> findAllOptimized();
}