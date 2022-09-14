-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema PortfolioNHG
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema PortfolioNHG
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `PortfolioNHG` DEFAULT CHARACTER SET utf8 ;
USE `PortfolioNHG` ;

-- -----------------------------------------------------
-- Table `PortfolioNHG`.`navegador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PortfolioNHG`.`navegador` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `img_logo` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PortfolioNHG`.`pie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PortfolioNHG`.`pie` (
  `id` INT NOT NULL,
  `facebook` VARCHAR(45) NULL,
  `youTube` VARCHAR(45) NULL,
  `whatsApp` VARCHAR(45) NULL,
  `instagram` VARCHAR(45) NULL,
  `tikTok` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  `correo` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PortfolioNHG`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PortfolioNHG`.`persona` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `ocupacion` VARCHAR(45) NULL,
  `fechaNac` DATE NULL,
  `inf_curriculum` VARCHAR(45) NULL,
  `info_foto` VARCHAR(45) NULL,
  `login` VARCHAR(45) NULL,
  `navegador_id` INT NOT NULL,
  `pie_id` INT NOT NULL,
  PRIMARY KEY (`id`, `navegador_id`, `pie_id`),
  CONSTRAINT `fk_persona_navegador1`
    FOREIGN KEY (`navegador_id`)
    REFERENCES `PortfolioNHG`.`navegador` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_persona_pie1`
    FOREIGN KEY (`pie_id`)
    REFERENCES `PortfolioNHG`.`pie` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PortfolioNHG`.`servicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PortfolioNHG`.`servicio` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `texto` VARCHAR(250) NULL,
  `img_servicio` VARCHAR(45) NULL,
  `persona_id` INT NOT NULL,
  `fecha_ini` DATE NULL,
  `fecha_fin` DATE NULL,
  PRIMARY KEY (`id`, `persona_id`),
  CONSTRAINT `fk_conocimientos_persona`
    FOREIGN KEY (`persona_id`)
    REFERENCES `PortfolioNHG`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PortfolioNHG`.`experiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PortfolioNHG`.`experiencia` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `texto` VARCHAR(45) NULL,
  `fecha_ini` DATE NULL,
  `fecha_fin` DATE NULL,
  `url_img` VARCHAR(45) NULL,
  `persona_id` INT NOT NULL,
  `link` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `persona_id`),
  CONSTRAINT `fk_experiencias_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `PortfolioNHG`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PortfolioNHG`.`habilidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PortfolioNHG`.`habilidad` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `texto` VARCHAR(250) NULL,
  `img_habilidades` VARCHAR(45) NULL,
  `persona_id` INT NOT NULL,
  `persona_navegador_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`, `persona_navegador_id`),
  CONSTRAINT `fk_habilidad_persona1`
    FOREIGN KEY (`persona_id` , `persona_navegador_id`)
    REFERENCES `PortfolioNHG`.`persona` (`id` , `navegador_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;